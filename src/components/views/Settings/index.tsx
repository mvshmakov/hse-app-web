import * as React from "react";
import { View, PanelHeader, Panel, Group, List } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

import SettingsSnippetBlock from "@/components/blocks/SettingsSnippet";
import { PureView } from "@/typings/Components";

import "./styles.scss";
import { IUser } from "@/typings/User";

export interface IStateProps {
    user: IUser;
}
interface IProps {
    id: string;
}

interface IState {
    activePanel: string;
}

export default class SettingsView extends PureView<
    IProps & IStateProps,
    IState
> {
    state = {
        activePanel: "main"
    };

    changePanel(activePanel: string) {
        return (...args) => {
            this.setState({ activePanel });
        };
    }

    render() {
        return (
            <View id={this.props.id} activePanel={this.state.activePanel}>
                <Panel id="main">
                    <PanelHeader noShadow={true}>Настройки</PanelHeader>
                    <Group>
                        <List>
                            <SettingsSnippetBlock
                                user={this.props.user}
                                onSnippetClick={() => {}}
                            />
                        </List>
                    </Group>
                </Panel>
                <Panel id="more" />
            </View>
        );
    }
}
