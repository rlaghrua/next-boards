import { Page } from "./Paginations01.styles";
import { IPaginations01UIProps } from "./Paginations01.types";

export default function Paginations01UI(props: IPaginations01UIProps) {
  return (
    <div>
      <Page className="span-White" onClick={props.onClickPrevPage}>{`<`}</Page>
      {new Array(10).fill(1).map(
        (_, index) =>
          props.startPage + index <= props.lastPage && (
            <Page
              className="span-White"
              key={props.startPage + index}
              onClick={props.onClickPage}
              id={String(props.startPage + index)}
              isActive={props.startPage + index === props.activedPage}
            >
              {props.startPage + index}
            </Page>
          )
      )}
      <Page className="span-White" onClick={props.onClickNextPage}>{`>`}</Page>
    </div>
  );
}
