import {
  FORGOT_PASSWORD_PATH,
  HOME_PATH,
  REGISTRATION_PATH,
  VALIDATE_CODE_PATH,
} from "./constants";

export type RootStackParamList = {
  [HOME_PATH]: undefined;
  [REGISTRATION_PATH]: undefined;
  [FORGOT_PASSWORD_PATH]: undefined;
  [VALIDATE_CODE_PATH]: undefined;
};
