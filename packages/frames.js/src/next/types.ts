import { ActionIndex, FrameActionPayload } from "../types";

export type HeadersList = {
  userAgent: string | null;
  acceptLanguage: string | null;
  pathname: string | null;
  url: string | null;
  host: string | null;
  urlWithoutPathname: string | null;
};

export type FrameState = Record<string, string>;

export type RedirectMap = Record<number, string>;

export type PreviousFrame<T extends FrameState = FrameState> = {
  postBody: FrameActionPayload | null;
  prevState: T | null;
  prevRedirects: RedirectMap | null;
  pathname?: string;
  headers: HeadersList;
};

export type FrameReducer<T extends FrameState = FrameState> = (
  state: T,
  action: PreviousFrame
) => T;

export type FrameButtonAutomatedProps = {
  actionIndex: ActionIndex;
};

export type Dispatch = (actionIndex: ActionIndex) => any;

export type FrameButtonProvidedProps =
  | FrameButtonPostRedirectProvidedProps
  | FrameButtonPostProvidedProps;

export type FrameButtonPostProvidedProps = {
  children: string | number;
  onClick: Dispatch;
};
export type FrameButtonPostRedirectProvidedProps = {
  href: string;
  children: string | number;
};
