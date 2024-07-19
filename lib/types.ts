interface Course {
    name: string;
    id: number;
    code: string;
    lecturer_id: number;
    lecturer: {
        name: string;
    };   
}

interface Attendance {
    timestamp: string;
    present: boolean
}

interface Student {
    name: string;
    email: string;
    matric_no: string;
    role: string;
}
interface CourseStudent {
    name: string;
    email: string;
    matric_no: string;
    role: string;
}
interface Lecturer {
    name: string;
    email: string;
    role: string;
}