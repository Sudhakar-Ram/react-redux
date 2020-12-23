import { COUNTER_INCREAMENT, COUNTER_DECREAMENT, COUNTER_RESET } from "./action_type";

export function counterIncreament() {
    return {
      type: COUNTER_INCREAMENT,
    };
}

export function counterDecreament() {
    return {
      type: COUNTER_DECREAMENT,
    };
}

export function counterReset() {
    return {
      type: COUNTER_RESET,
    };
}