import { Alert }                    from "antd";
import React, { useEffect }         from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGlobalMessage }         from "../../../store/features/app/reducer";
import { selectAppState }           from "../../../store/features/app/selectors";


export const AppAlert: React.FC = () => {
  const {globalMessage} = useSelector(selectAppState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (globalMessage) {
      setTimeout(() => {
        dispatch(setGlobalMessage(null));
      }, 2000);
    }
  }, [globalMessage]);

  if (!globalMessage) {
    return <></>;
  }

  const {message, description, type, showIcon} = globalMessage

  return (
    <>
      <Alert
        message={message}
        description={description || ''}
        type={type}
        showIcon={showIcon || true}
      />
    </>
  );
};

