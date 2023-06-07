import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";

export const withAuth = (Component: any) => (props: any) => {
  const [accessToken] = useRecoilState(accessTokenState);

  const router = useRouter();

  useEffect(() => {
    if (!accessToken) {
      getAccessToken().then((newAccessToken) => {
        if (!newAccessToken) {
          alert("로그인 후 이용해주세요.");
          router.push("/login");
        }
      });
    }
  }, []);

  return <Component {...props} />;
};
