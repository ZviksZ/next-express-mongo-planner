import { Alert } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGlobalMessage } from "src/store/features/app/reducer";
import { selectAppState } from "../../../store/features/app/selectors";

export const AppAlert: React.FC = () => {
  const { globalMessage } = useSelector(selectAppState);

  const dispatch = useDispatch();

  useEffect(() => {
    if (globalMessage) {
      setTimeout(() => {
        dispatch(setGlobalMessage(null));
      }, 2000);
    }
  }, [globalMessage]);

  if (!globalMessage) {
    return null;
  }

  const { showIcon, message, type } = globalMessage;

  return <Alert message={message} type={type} showIcon={showIcon} />;
};
