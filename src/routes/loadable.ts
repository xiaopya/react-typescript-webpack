import {Lazy} from '@/components/Loading'

export const Home = Lazy(() => import("@/pages/Home"));
export const Child = Lazy(() => import("@/pages/Child"));
export const New = Lazy(() => import("@/pages/New"));