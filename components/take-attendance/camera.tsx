import React, { useEffect, useRef, useState } from 'react'
import { Button } from '../ui/button'
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogHeader } from "../ui/dialog"
import Webcam from "react-webcam";
import * as faceapi from 'face-api.js';

interface Props {
    course_id: number;
    class_date: string;
}

const Camera = ({ course_id, class_date }: Props) => {
    const webcamRef = useRef<any>(null);
    const [detecting, setDetecting] = useState(false);
    const [capturedImage, setCapturedImage] = useState(null);

    useEffect(() => {
        const loadModels = async () => {
            const MODEL_URL = '/app/components/models';
            await faceapi.loadTinyFaceDetectorModel(MODEL_URL);
        };

        loadModels();

        const runFaceDetection = async () => {
            if (!webcamRef.current) return;
            const video = webcamRef.current?.video;
            const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions());

            setDetecting(detections.length > 0);

            if (detections.length > 0) {
                // Capture image
                const imageSrc = webcamRef.current.getScreenshot();
                setCapturedImage(imageSrc);

                // You can process the captured image here, e.g., send it to a server for recognition
                console.log('Face detected and image captured:', imageSrc);
            }
        };

        const interval = setInterval(runFaceDetection, 1000);

        return () => clearInterval(interval);
    }, [webcamRef]);

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
                        <DialogDescription className='pb-12'>Please center your face within the circle below</DialogDescription>
                        <div className="h-[450px] w-[450px] mx-auto border-[20px] rounded-full border-gray-800 overflow-hidden">
                            <Webcam ref={webcamRef} className='w-full h-full object-cover' />
                            {detecting && <p>Face detected!</p>}
                        </div>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default Camera
