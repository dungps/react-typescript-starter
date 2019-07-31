import { InferableComponentEnhancerWithProps } from "react-redux"

export type ReduxScreenProps<T> = T extends InferableComponentEnhancerWithProps<infer P, unknown> ? P : {}
