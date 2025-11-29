import { Course } from "./types";

export const COURSES: Course[] = [
    {
        id: "word",
        title: "Microsoft Word",
        iconName: "FileText",
        theme: "blue",
        description: "Soạn thảo văn bản chuyên nghiệp, luyện thi MOS.",
    },
    {
        id: "excel",
        title: "Microsoft Excel",
        iconName: "Table",
        theme: "green",
        description: "Xử lý bảng tính, hàm số và biểu đồ nâng cao.",
    },
    {
        id: "ppt",
        title: "Microsoft PowerPoint",
        iconName: "Presentation",
        theme: "orange",
        description: "Thiết kế slide thuyết trình ấn tượng & chuyên nghiệp.",
    },
    {
        id: "computer",
        title: "Kiến thức máy tính",
        iconName: "Monitor",
        theme: "purple",
        description: "Căn bản về phần cứng, hệ điều hành và internet.",
    },
    {
        id: "ic3",
        title: "Chứng chỉ IC3",
        iconName: "Cpu", // Using Cpu as a placeholder for the Globe/Chip concept
        theme: "cyan",
        description: "Chuẩn tin học quốc tế về máy tính và mạng.",
    },
    {
        id: "security",
        title: "An toàn thông tin",
        iconName: "ShieldCheck",
        theme: "rose",
        description: "Bảo mật dữ liệu, an toàn mạng và phòng chống virus.",
    },
];

export const CONTACT_INFO = {
    website: "https://www.tinhoccoban.vn/",
    tiktok: "www.tiktok.com/@tinhoccobann",
    phone: "0356334647",
    zalo: "0356334647",
};
