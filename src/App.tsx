import * as React from "react";
import { Root, View, Panel } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

import SearchPanel from "./panels/Search";

export interface Props {}
export interface State {}

export default class App extends React.Component<Props, State> {
    render() {
        return (
            <Root activeView="main">
                <View id="main" activePanel="search">
                    <Panel id="search">
                        <SearchPanel />
                    </Panel>
                </View>
            </Root>
        );
    }
}
