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
    id: number;
    name: string;
    email: string;
    matric_no: string;
    role: string;
    attendance_level: number
}
interface Lecturer {
    name: string;
    email: string;
    role: string;
}

interface CourseSessionResponse {
    total_classes_held: number;
    total_students: number;
    attendance_records: [
        {
            class_date: string;
            title: string;
            students_present: number;
            total_students: number;
            attendance_ratio: string
        }
    ];
}