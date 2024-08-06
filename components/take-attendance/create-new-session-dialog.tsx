import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "../ui/dialog"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { Icons } from "../icons"
import { Button } from "../ui/button"
import { DialogHeader, DialogFooter } from "../ui/dialog"
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useCreateSession } from "@/api/create-session"
import { useState } from "react"


const sessionSchema = yup.object().shape({
    course_id: yup.string().required("Select a course"),

    title: yup.string()
        .required("Please enter a title"),
});

export type SessionValues = yup.InferType<typeof sessionSchema>;

const defaultValues: SessionValues = {
    course_id: "",
    title: "",
};

export const CreateNewSession = ({ courses }: { courses: Course[] }) => {
    const [id, setId] = useState(0);
    const form = useForm<SessionValues>({ resolver: yupResolver(sessionSchema), defaultValues, mode: "all" });
    const { mutate, isPending } = useCreateSession(id);


    async function onSubmit({ course_id, title }: SessionValues) {
        let id = +course_id;
        setId(id);
        mutate({ id, title });
        form.reset()
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="ml-auto">
                    <Icons.PlusIcon className="mr-2 h-4 w-4" />
                    Create New Session
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[420px]">
                <DialogHeader>
                    <DialogTitle>Create New Attendance Session</DialogTitle>
                    <DialogDescription>Fill out the details for your new attendance session.</DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
                        <div className="grid gap-6 my-6">
                            <FormField
                                control={form.control}
                                name="course_id"
                                render={({ field }) => (
                                    <FormItem>
                                        <Label htmlFor="course_id">Course</Label>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a course" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {courses.map(course => (
                                                    <SelectItem value={String(course.id)} key={course.id}>{course.name}({course.code})</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <Label htmlFor="title">Title</Label>
                                        <FormControl>
                                            <Input
                                                id="title"
                                                placeholder="Enter title for this class"
                                                {...field}
                                                error={form.formState.errors.title?.message} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <DialogFooter>
                            <div>
                                <DialogTrigger asChild>
                                    <Button variant="destructive">Cancel</Button>
                                </DialogTrigger>
                            </div>
                            <DialogTrigger asChild>
                                <Button type="submit">Create Session</Button>
                            </DialogTrigger>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}