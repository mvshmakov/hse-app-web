import * as React from "react";
import { Search, PanelHeader, Panel, Group, List, Div } from "@vkontakte/vkui";
import PanelSpinner from "@vkontakte/vkui/dist/components/PanelSpinner/PanelSpinner";
import "@vkontakte/vkui/dist/vkui.css";

import UserSnippetBlock from "@/components/blocks/UserSnippet";
import { IUser } from "@/typings/User";
import { PurePanel } from "@/typings/Components";

import "./styles.scss";

const THROTTLE_DELAY: number = 100;

export interface IActionsProps {
    searchUserAction: (...args: any[]) => any;
}
export interface IStateProps {
    users: IUser[];
    loading: boolean;
}
interface IProps {
    id: string;
    type: "group" | "general";
    onSelectUser: () => any;
}

interface IState {
    username: string;
    timerId?: number;
}

export default class SearchPanel extends PurePanel<
    IActionsProps & IStateProps & IProps,
    IState
> {
    state = {
        username: "",
        timerId: null
    };

    get users() {
        const search = this.state.username.toLowerCase();

        return this.props.users.filter(
            ({ label }) => label.toLowerCase().indexOf(search) > -1
        );
    }

    onChange = (username: string) => {
        if (this.state.timerId) {
            clearTimeout(this.state.timerId);
        }

        const timerId = window.setTimeout(
            this.props.searchUserAction,
            THROTTLE_DELAY,
            username
        );

        this.setState({ username, timerId });
    };

    render() {
        const { id, loading, onSelectUser } = this.props;

        const children = loading ? (
            <PanelSpinner />
        ) : (
            <List>
                {this.users.length !== 0 &&
                    this.users.map(({ id, label }) => {
                        return (
                            <UserSnippetBlock
                                key={id}
                                userId={id}
                                entity="student"
                                title={label}
                                description="Тестовое описание"
                                onClick={onSelectUser}
                            />
                        );
                    })}
            </List>
        );

        return (
            <Panel id={id}>
                <PanelHeader noShadow={true}>Поиск</PanelHeader>
                <Search value={this.state.username} onChange={this.onChange} />
                <Group className="group">
                    {!this.state.username && (
                        <Div className="name">
                            Введите название группы, ФИО студента или
                            преподавателя, номер аудитории
                        </Div>
                    )}
                    {this.state.username && children}
                </Group>
            </Panel>
        );
    }
}
