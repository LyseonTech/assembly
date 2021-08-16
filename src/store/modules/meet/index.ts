import { Module } from "vuex";
import { RootState } from "@/store";
import { mutations } from "./mutations";
import { MeetState, initialState } from "./state";

export * from "./state";

export const store: Module<MeetState, RootState> = {
	state: initialState,
	mutations,
};
