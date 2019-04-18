import * as React from "react";
import { Div } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

import { IFunctionalBlock } from "@/typings/Components";

import "./styles.scss";

interface IProps {
    time?: {
        start: string;
        end: string;
    };
    lessonType?: string;
    lesson?: string;
    place?: string;
    teacher?: string;
    onButtonClick?: (...args: any[]) => any;
}

const titleColorPicker = (lessonType: string) => {
    switch (lessonType) {
        case "Контрольная работа":
            return "#ec5b44";
        default:
            return "#528bcc";
    }
};

const borderColorPicker = (lessonType: string) => {
    switch (lessonType) {
        case "Контрольная работа":
            return "#ec5b44";
        case "Практическое занятие":
            return "#528bcc";
        default:
            return "#d1d1d6";
    }
};

const ScheduleSnippetBlock: IFunctionalBlock<IProps> = ({
    time = { start: "12:10", end: "13:30" },
    lessonType = "Контрольная работа",
    lesson = "Философия",
    place = "ауд. 213, Кирпичная ул., д. 33",
    teacher = "Friedrich Wilhelm Nietzsche",
    onButtonClick
}: IProps) => (
    <Div className="root">
        <div
            className="time-wrapper"
            style={{ borderColor: borderColorPicker(lessonType) }}
        >
            <div className="time-start">{time.start}</div>
            <div className="time-end">{time.end}</div>
        </div>
        <div className="content-wrapper">
            <div className="lesson-type" style={{ color: titleColorPicker(lessonType) }}>
                {lessonType.toUpperCase()}
            </div>
            <div className="lesson">{lesson}</div>
            <div>{place}</div>
            <div className="teacher">{teacher}</div>
        </div>
    </Div>
);

export default ScheduleSnippetBlock;
