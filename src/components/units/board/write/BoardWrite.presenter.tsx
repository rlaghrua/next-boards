import { IBoardWriteUIProps } from "./BoardWrite.types";
import { v4 as uuidv4 } from "uuid";
import Uploads01 from "../../../commons/uploads/Uploads01.container";
import {
  AddressModal,
  AddressSearchInput,
  SubmitButton,
} from "./BoardWrite.styles";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <>
      {props.isOpen && (
        <AddressModal visible={true}>
          <AddressSearchInput onComplete={props.onCompleteAddressSearch} />
        </AddressModal>
      )}
      <div>
        <div>{props.isEdit ? "게시글 수정" : "게시글 등록"}</div>
        <div>
          <div>
            <div>작성자</div>
            <input
              type="text"
              placeholder="이름을 적어주세요."
              onChange={props.onChangeWriter}
              defaultValue={props.data?.fetchBoard.writer ?? ""}
              readOnly={!!props.data?.fetchBoard.writer}
            />
            <div>{props.writerError}</div>
          </div>
          <div>
            <div>비밀번호</div>
            <input
              type="password"
              placeholder="비밀번호를 작성해주세요."
              onChange={props.onChangePassword}
            />
            <div>{props.passwordError}</div>
          </div>
        </div>
        <div>
          <div>제목</div>
          <input
            type="text"
            placeholder="제목을 작성해주세요."
            onChange={props.onChangeTitle}
            defaultValue={props.data?.fetchBoard.title}
          />
          <div>{props.titleError}</div>
        </div>
        <div>
          <div>내용</div>
          <textarea
            placeholder="내용을 작성해주세요."
            onChange={props.onChangeContents}
            defaultValue={props.data?.fetchBoard.contents}
          />
          <div>{props.contentsError}</div>
        </div>
        <div>
          <div>주소</div>
          <div>
            <input placeholder="07250" readOnly value={props.zipcode} />
            <button onClick={props.onClickAddressSearch}>우편번호 검색</button>
          </div>
          <input
            readOnly
            value={
              props.address ||
              (props.data?.fetchBoard.boardAddress?.address ?? "")
            }
          />
          <input
            onChange={props.onChangeAddressDetail}
            defaultValue={
              props.data?.fetchBoard.boardAddress?.addressDetail ?? ""
            }
          />
        </div>
        <div>
          <div>유튜브</div>
          <input
            placeholder="링크를 복사해주세요."
            onChange={props.onChangeYoutubeUrl}
            defaultValue={props.data?.fetchBoard.youtubeUrl ?? ""}
          />
        </div>
        <div>
          <div>사진첨부</div>
          {props.fileUrls.map((el, index) => (
            <Uploads01
              key={uuidv4()}
              index={index}
              fileUrl={el}
              onChangeFileUrls={props.onChangeFileUrls}
            />
          ))}
        </div>
        <div>
          <div>메인설정</div>
          <input type="radio" id="youtube" name="radio-button" />
          <label htmlFor="youtube">유튜브</label>
          <input type="radio" id="image" name="radio-button" />
          <label htmlFor="image">사진</label>
        </div>
        <div>
          <SubmitButton
            onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
            isActive={props.isEdit ? true : props.isActive}
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </SubmitButton>
        </div>
      </div>
    </>
  );
}
