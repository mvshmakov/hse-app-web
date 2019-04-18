import * as React from "react";
import { Panel, PanelHeader, Group } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

import ScheduleSnippetBlock from "@/components/blocks/ScheduleSnippet";

import "./styles.scss";

interface IProps {
    id: string;
    date?: string;
}

export default ({ id, date = "Четверг, 21 марта" }: IProps) => (
    <Panel id={id}>
        <PanelHeader noShadow>Расписание</PanelHeader>
        <Group title={date}>
            <ScheduleSnippetBlock />
            <ScheduleSnippetBlock lessonType="Практическое занятие" />
            <ScheduleSnippetBlock lessonType="Семинар" />
        </Group>
    </Panel>
);
