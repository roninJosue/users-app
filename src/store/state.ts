import {atom, RecoilState} from 'recoil';
import {User} from "../types/users";

export const userState: RecoilState<User[]> = atom({
  key: 'userState',
  default: []
})
