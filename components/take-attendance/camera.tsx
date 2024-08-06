import React, { useEffect, useRef, useState } from 'react'
import { Button } from '../ui/button'
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogHeader } from "../ui/dialog"
import { useToast } from "@/components/ui/use-toast"

import Webcam from "react-webcam";
import * as faceapi from 'face-api.js';
import { AttendancePayload, useMarkAttendance } from '@/api/mark_attendance';

interface Props {
    course_id: number;
    class_date: string;
}

const Camera = ({ course_id, class_date }: Props) => {
    const webcamRef = useRef<any>(null);
    const [detecting, setDetecting] = useState(false);
    const [processing, setProcessing] = useState(false);

    const { toast } = useToast()

    const { mutate: markAttendance, isPending } = useMarkAttendance(course_id);

    useEffect(() => {

        const runFaceDetection = async () => {
            if (!webcamRef.current) return;
            if (processing) return;
            if (isPending) return;
            const video = webcamRef?.current?.video;
            const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions());

            setDetecting(detections.length > 0);

            if (detections.length > 0) {
                //start processing as a face came into view
                setProcessing(true);
                // inform user to stay still
                toast({
                    title: "Image found",
                    description: " Please stay still while we capture"
                });
                //pause for 3 secs for them to stay still and we can get a clear image
                sleep(3000).then(
                    () => {
                        // Capture image
                        const imageSrc = webcamRef?.current?.getScreenshot();
                        const face = createImageFileFromBase64(imageSrc);
                        //build payload
                        let payload: AttendancePayload = {
                            course_id,
                            class_date,
                            face
                        }
                        //send call to markAttendance
                        markAttendance(payload);
                        //sleep 3 secs, then chase them away
                        sleep(2000).then(
                            () => {
                                setProcessing(false)
                            });

                    }
                )

            }
        };

        const interval = setInterval(runFaceDetection, 1000);

        return () => clearInterval(interval);
    });

    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline" size="sm">
                        Take Attendance
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[800px] h-[80vh] overflow-hidden">
                    <DialogHeader>
                        <DialogTitle>Scan Face</DialogTitle>
                        <DialogDescription className='pb-12'>Please center your face within the circle below, and  <span className='scale-150 uppercase font-bold'>stay still.</span></DialogDescription>
                        <div className={`h-[450px] anim w-[450px] mx-auto border-[20px] rounded-full transition-all duration-500 ease-in-out
                            ${detecting ? "border-green-700" : "border-red-500"}
                              overflow-hidden`}>
                            <Webcam ref={webcamRef} screenshotFormat="image/png" className='w-full h-full object-cover' />
                        </div>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default Camera




function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function createImageFileFromBase64(base64Data: string) {
    // Remove the data URI header
    const base64WithoutHeader = base64Data.replace(/^data:image\/png;base64,/, '');

    // Convert the Base64 string to a byte array
    const binaryData = atob(base64WithoutHeader);

    // Create a Blob from the byte array
    const arrayBuffer = new ArrayBuffer(binaryData.length);
    const view = new Uint8Array(arrayBuffer);
    for (let i = 0; i < binaryData.length; i++) {
        view[i] = binaryData.charCodeAt(i);
    }
    const blob = new Blob([arrayBuffer], {
        type: 'image/png'
    });

    // Create a File object from the Blob
    const file = new File([blob], 'image.png', { type: 'image/png' });

    return file;
}