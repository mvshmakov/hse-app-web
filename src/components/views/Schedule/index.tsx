import * as React from "react";
import { View } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

import SchedulePanel from "@/components/panels/Schedule";
import { PureView } from "@/typings/Components";

import "./styles.scss";

interface IProps {
    id: string;
}
interface IState {
    activePanel: string;
}

export default class ScheduleView extends PureView<IProps, IState> {
    state = {
        activePanel: "schedule"
    };

    render() {
        return (
            <View
                id={this.props.id}
                activePanel={this.state.activePanel}
            >
                <SchedulePanel id={"schedule"}/>
            </View>
        );
    }
}
