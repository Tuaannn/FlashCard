import React, { useState } from "react";
import {
    Check,
    Lock,
    Sparkles,
    Globe,
    Phone,
    ArrowLeft,
    ArrowRight,
    ExternalLink,
} from "lucide-react";
import { CourseSelector } from "./CourseSelector";
import { COURSES, CONTACT_INFO } from "../constants";
import { ValidationState } from "../types";

export const AccessCard: React.FC = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [selectedCourseId, setSelectedCourseId] = useState<string | null>(
        null
    );
    const [isFullAccess, setIsFullAccess] = useState(false);
    const [inputKey, setInputKey] = useState("");
    const [validation, setValidation] = useState<ValidationState>({
        isValid: false,
        message: "",
        type: "idle",
    });

    const handleSelectCourse = (id: string) => {
        setSelectedCourseId((prev) => (prev === id ? null : id));
        if (isFullAccess) setIsFullAccess(false);
    };

    const handleFullAccessToggle = () => {
        const newState = !isFullAccess;
        setIsFullAccess(newState);
        if (newState) {
            setSelectedCourseId(null);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!inputKey.trim()) {
            setValidation({
                isValid: false,
                message: "Vui lòng nhập mã kích hoạt.",
                type: "error",
            });
            return;
        }

        if (!isFullAccess && !selectedCourseId) {
            setValidation({
                isValid: false,
                message: "Vui lòng chọn môn học.",
                type: "error",
            });
            return;
        }

        setValidation({
            isValid: true,
            message: "Kích hoạt thành công! Đang chuyển hướng...",
            type: "success",
        });
    };

    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
        CONTACT_INFO.website
    )}`;

    const RobotLogo = ({
        size = "normal",
    }: {
        size?: "normal" | "medium" | "small" | "tiny";
    }) => {
        const containerClass =
            size === "normal"
                ? "w-20 h-20"
                : size === "medium"
                ? "w-16 h-16"
                : size === "small"
                ? "w-12 h-12"
                : "w-10 h-10";
        const scaleClass =
            size === "normal"
                ? "scale-[0.75]"
                : size === "medium"
                ? "scale-[0.6]"
                : size === "small"
                ? "scale-[0.5]"
                : "scale-[0.4]";
        const borderRadius = size === "tiny" ? "rounded-lg" : "rounded-2xl";

        return (
            <div
                className={`relative group cursor-pointer transition-transform hover:scale-105 duration-300`}
            >
                <div
                    className={`${containerClass} bg-white ${borderRadius} shadow-xl shadow-blue-900/40 flex items-center justify-center relative overflow-hidden`}
                >
                    <div className="absolute top-0 right-0 w-full h-full bg-blue-50/10 rounded-full blur-xl transform translate-x-1/2 -translate-y-1/2"></div>
                    <div
                        className={`relative z-10 mt-1 transform ${scaleClass} origin-center`}
                    >
                        <div className="absolute -top-[15px] left-1/2 -translate-x-1/2 w-[3px] h-4 bg-gray-300 rounded-t-full"></div>
                        <div className="absolute -top-[19px] left-1/2 -translate-x-1/2 w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)] border-2 border-white/40"></div>
                        <div className="w-[74px] h-[58px] bg-white rounded-2xl flex items-center justify-center relative shadow-sm border border-gray-100">
                            <div className="w-[62px] h-[46px] bg-sky-100 rounded-xl relative overflow-hidden flex items-center justify-center border border-sky-200">
                                <div className="flex gap-[14px] mb-1">
                                    <div className="w-2.5 h-2.5 bg-slate-800 rounded-full"></div>
                                    <div className="w-2.5 h-2.5 bg-slate-800 rounded-full"></div>
                                </div>
                                <div className="absolute top-[25px] left-[7px] w-2 h-1.5 bg-rose-400/60 rounded-full blur-[0.5px]"></div>
                                <div className="absolute top-[25px] right-[7px] w-2 h-1.5 bg-rose-400/60 rounded-full blur-[0.5px]"></div>
                                <div className="absolute bottom-[10px] w-2.5 h-1 border-b-[2px] border-slate-800 rounded-full"></div>
                            </div>
                        </div>
                        <div className="absolute -bottom-[6px] left-1/2 -translate-x-1/2 w-8 h-[3px] bg-white rounded-full opacity-90"></div>
                        <div className="absolute -bottom-[3px] left-1/2 -translate-x-1/2 w-4 h-2 bg-white skew-x-12"></div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="w-full max-w-[400px] h-[600px] perspective-1000 mx-auto">
            <div
                className={`relative w-full h-full transition-all duration-700 transform-style-3d ${
                    isFlipped ? "rotate-y-180" : ""
                }`}
            >
                {/* ================= FACE 1 (FRONT) ================= */}
                {/* ================= FACE 1 (FRONT) ================= */}
                {/* Changed background to #42a5f5 (lighter blue) */}
                <div className="absolute inset-0 w-full h-full bg-[#42a5f5] rounded-[1.5rem] shadow-2xl overflow-hidden border border-blue-400/30 backface-hidden flex flex-col">
                    <div className="flex-1 flex flex-col items-center justify-between p-6 relative">
                        {/* Branding */}
                        <div className="flex flex-col items-center mt-2">
                            <RobotLogo size="normal" />
                            <h1 className="mt-3 text-xl font-black text-white tracking-tight uppercase drop-shadow-md">
                                Tin Học Cơ Bản
                            </h1>
                            <p className="text-xs text-blue-50 font-medium">
                                Học thật - Làm thật - Kết quả thật
                            </p>
                        </div>

                        {/* QR Code */}
                        <div className="p-2 bg-white rounded-xl shadow-md border border-gray-100 relative group">
                            <img
                                src={qrUrl}
                                alt="Website QR"
                                className="w-28 h-28 rounded-lg"
                                style={{ imageRendering: "pixelated" }}
                            />
                            <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-yellow-400 text-blue-900 text-[9px] font-bold px-3 py-1 rounded-full shadow-md whitespace-nowrap border border-white/20">
                                Quét mã truy cập
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="w-full space-y-2">
                            <a
                                href={CONTACT_INFO.website}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center p-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg border border-white/20 group cursor-pointer transition-all"
                            >
                                <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center mr-2.5 text-blue-500">
                                    <Globe size={16} strokeWidth={2.5} />
                                </div>
                                <div>
                                    <div className="text-[9px] uppercase font-bold text-blue-100">
                                        Website
                                    </div>
                                    <div className="font-bold text-sm text-white">
                                        {CONTACT_INFO.website.replace(
                                            "https://",
                                            ""
                                        )}
                                    </div>
                                </div>
                                <ExternalLink
                                    size={14}
                                    className="ml-auto text-blue-100 group-hover:text-white"
                                />
                            </a>
                            <div className="grid grid-cols-2 gap-2">
                                <a
                                    href={`https://${CONTACT_INFO.tiktok}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex flex-col items-center p-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg border border-white/20 transition-all"
                                >
                                    <div className="mb-0.5">
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-5 h-5 text-white"
                                        >
                                            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                                        </svg>
                                    </div>
                                    <div className="font-bold text-[10px] text-white">
                                        @tinhoccobann
                                    </div>
                                </a>
                                <div className="flex flex-col items-center p-2 bg-white/10 rounded-lg border border-white/20">
                                    <div className="flex items-center gap-1 mb-0.5">
                                        <Phone
                                            size={14}
                                            className="text-white"
                                            strokeWidth={2.5}
                                        />
                                        <span className="bg-white text-blue-500 text-[7px] font-bold px-1.5 py-0.5 rounded">
                                            ZALO
                                        </span>
                                    </div>
                                    <div className="font-bold text-[10px] text-white">
                                        {CONTACT_INFO.phone}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Action Button */}
                        <button
                            onClick={() => setIsFlipped(true)}
                            className="w-full py-3.5 bg-white text-[#42a5f5] rounded-xl font-black shadow-lg hover:bg-blue-50 transform transition-all hover:-translate-y-1 flex items-center justify-center gap-2 text-sm mb-1"
                        >
                            Key Khóa học ở mặt sau{" "}
                            <ArrowRight size={16} strokeWidth={3} />
                        </button>
                    </div>
                </div>

                {/* ================= FACE 2 (BACK) ================= */}
                {/* Changed background to #42a5f5 */}
                <div className="absolute inset-0 w-full h-full bg-[#42a5f5] rounded-[1.5rem] shadow-2xl overflow-hidden border border-blue-400/30 backface-hidden rotate-y-180 flex flex-col p-4">
                    {/* Back Button */}
                    <button
                        onClick={() => setIsFlipped(false)}
                        className="absolute top-4 left-4 p-1.5 rounded-full hover:bg-white/10 text-white transition-colors z-20 border border-transparent hover:border-white/20"
                    >
                        <ArrowLeft size={20} strokeWidth={2.5} />
                    </button>

                    {/* 1. Header Area: Logo + Titles (Compact) */}
                    <div className="mt-1 flex flex-col items-center justify-center shrink-0">
                        <RobotLogo size="medium" /> {/* w-16 h-16 */}
                        <h2 className="mt-2 font-black text-white text-lg tracking-tight uppercase">
                            Tin Học Cơ Bản
                        </h2>
                        <div className="mt-0.5 mb-1 text-[9px] font-extrabold text-blue-100 uppercase tracking-widest bg-white/10 px-2 py-0.5 rounded-full border border-white/10">
                            Chọn khóa học
                        </div>
                    </div>

                    {/* 2. Middle Area: Course Selection */}
                    <div className="flex-1 flex flex-col justify-center gap-2 py-1 min-h-0 overflow-hidden">
                        {/* Combo Button - Compact h-14 */}
                        <div
                            onClick={handleFullAccessToggle}
                            className={`
             w-full shrink-0 relative flex items-center p-2 rounded-xl border-2 cursor-pointer transition-all duration-200 group h-14
             ${
                 isFullAccess
                     ? "bg-white border-yellow-400 ring-2 ring-yellow-200"
                     : "bg-white border-blue-200 hover:shadow-md"
             }
           `}
                        >
                            {/* Checkbox */}
                            <div
                                className={`
             flex-shrink-0 w-4 h-4 rounded-full border-2 border-gray-300 bg-white mr-2 flex items-center justify-center transition-colors duration-200
             ${
                 isFullAccess
                     ? "border-transparent"
                     : "group-hover:border-gray-400"
             }
           `}
                            >
                                {isFullAccess && (
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#42a5f5]"></div>
                                )}
                            </div>

                            {/* Icon */}
                            <div
                                className={`
             flex-shrink-0 w-8 h-8 rounded-lg bg-[#42a5f5] shadow-md flex items-center justify-center mr-2
             transform transition-transform duration-300
           `}
                            >
                                <Sparkles
                                    size={18}
                                    className="text-white"
                                    strokeWidth={2.5}
                                />
                            </div>

                            {/* Text */}
                            <div className="flex-1 min-w-0">
                                <h3
                                    className={`font-extrabold text-xs ${
                                        isFullAccess
                                            ? "text-[#42a5f5]"
                                            : "text-gray-800"
                                    }`}
                                >
                                    Combo Tất Cả Khóa Học <br /> (Tặng Câu hỏi
                                    Tổng hợp - Full Version)
                                </h3>
                            </div>
                        </div>

                        {/* Grid - Scrollable if needed, but fits 3 rows nicely */}
                        <div className="w-full overflow-y-auto custom-scrollbar pr-1 -mr-1">
                            <CourseSelector
                                selectedCourseId={selectedCourseId}
                                onSelect={handleSelectCourse}
                                disabled={isFullAccess}
                            />
                        </div>
                    </div>

                    {/* 3. Footer Area: Key Input (Compact) */}
                    <div className="mt-auto pt-2 shrink-0">
                        <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/20 shadow-sm">
                            <div className="flex items-center justify-center mb-2">
                                <label className="text-[9px] font-extrabold text-white uppercase tracking-widest flex items-center gap-1.5">
                                    <Lock
                                        size={10}
                                        className="text-yellow-400"
                                        strokeWidth={2.5}
                                    />{" "}
                                    Mã Kích Hoạt
                                </label>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-2">
                                <input
                                    type="text"
                                    value={inputKey}
                                    onChange={(e) =>
                                        setInputKey(
                                            e.target.value.toUpperCase()
                                        )
                                    }
                                    className="w-full h-10 text-center text-base font-bold border-2 border-white/30 rounded-lg focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200/50 outline-none transition-all uppercase bg-white text-[#42a5f5] placeholder-gray-400"
                                    autoComplete="off"
                                />

                                {/* Validation Message */}
                                {validation.type !== "idle" && (
                                    <div
                                        className={`text-[9px] text-center font-bold -mt-1 ${
                                            validation.type === "error"
                                                ? "text-red-300"
                                                : "text-green-300"
                                        }`}
                                    >
                                        {validation.message}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    className={`
                   w-full h-10 font-bold text-xs rounded-lg transition-all duration-200 active:scale-95 flex items-center justify-center border
                   ${
                       inputKey
                           ? "bg-yellow-400 text-blue-900 shadow-lg hover:bg-yellow-300 border-yellow-500"
                           : "bg-white text-[#42a5f5] border-transparent shadow-md"
                   }
                 `}
                                >
                                    Nhập Mã Kích Hoạt này để bắt đầu học
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
