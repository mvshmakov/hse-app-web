import * as React from "react";
import { Search, PanelHeader, Group, List, Cell } from "@vkontakte/vkui";
import PanelSpinner from "@vkontakte/vkui/dist/components/PanelSpinner/PanelSpinner";
import "@vkontakte/vkui/dist/vkui.css";

import { fetchUser } from "../../helpers/api";

import "./styles.scss";

const THROTTLE_DELAY: number = 100;

export interface Props {}
export interface State {
    users: Array<{}>;
    search: string;
    isFetching: boolean;
    timerId?: number;
}

export default class SearchPanel extends React.PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            users: [],
            search: "",
            isFetching: false,
            timerId: null
        };

        this.onChange = this.onChange.bind(this); // TODO: ???
    }

    async componentDidMount() {
        try {
            this.setState({
                users: await fetchUser(this.state.search)
            });
        } catch (error) {
            console.log(error); // TODO: show notification
        }
    }

    get users() {
        const search = this.state.search.toLowerCase();

        return this.state.users.filter(
            ({ label }) => label.toLowerCase().indexOf(search) > -1
        );
    }

    onChange = (search: string) => {
        if (this.state.timerId) {
            clearTimeout(this.state.timerId);
        }

        const timerId = setTimeout(this.searchUser(search), THROTTLE_DELAY);
        debugger;

        this.setState({
            search,
            timerId,
            isFetching: true
        });
    };

    searchUser = async (user: string) => {
        return await fetchUser(user)
            .then(users =>
                this.setState({
                    users,
                    isFetching: false
                })
            )
            .catch(error => {
                console.log(error);
            }); // TODO: show notification
    };

    render() {
        return (
            <React.Fragment>
                <PanelHeader noShadow>HSE APP</PanelHeader>
                <Search value={this.state.search} onChange={this.onChange} />
                <Group title="Users">
                    {!this.state.search && (
                        <div className="name">Введите ФИО</div>
                    )}
                    {this.state.isFetching ? (
                        <PanelSpinner />
                    ) : (
                        <List>
                            {this.users.length !== 0 &&
                                this.users.map(user => {
                                    return (
                                        <Cell
                                            key={user._id}
                                            expandable
                                            onClick={() => {}}
                                        >
                                            {user.label}
                                        </Cell>
                                    );
                                })}
                        </List>
                    )}
                </Group>
            </React.Fragment>
        );
    }
}
