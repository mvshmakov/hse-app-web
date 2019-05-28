import { connect } from "react-redux";
import SettingsView, { IStateProps } from "@/components/views/Settings";

const mapStateToProps = (state): IStateProps => ({ user: state.user });

export default connect(mapStateToProps)(SettingsView);
