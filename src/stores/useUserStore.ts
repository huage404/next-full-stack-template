import {create} from "zustand";
import {devtools, persist} from "zustand/middleware";
import {immer} from "zustand/middleware/immer";

type TUserState = {
}

type TUserActions = {

}

const useUserStore = create<TUserState & TUserActions>()(
  devtools(
    immer(
      persist((_) => ({
      }), {
        name: 'UserStore'
      })
    )
  )
)
