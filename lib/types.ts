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