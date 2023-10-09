'use client'

import {NextUIProvider} from '@nextui-org/react'

interface ProvidersProps extends React.PropsWithChildren {}
export function Providers({children}: ProvidersProps) {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  )
}

/* _,.-Y  |  |  Y-._
.-~"   ||  |  |  |   "-.
I" ""=="|" !""! "|"[]""|     _____
L__  [] |..------|:   _[----I" .-{"-.
I___|  ..| l______|l_ [__L]_[I_/r(=}=-P
[L______L_[________]______j~  '-=c_]/=-^
\_I_j.--.\==I|I==_/.--L_]
 [_((==)[`-----"](==)j
    I--I"~~"""~~"I--I
    |[]|         |[]|
    l__j         l__j
    |!!|         |!!|
    |..|         |..|
    ([])         ([])
    ]--[         ]--[
    [_L]         [_L]
   /|..|\       /|..|\
  `=}--{='     `=}--{='
 .-^--r-^-.   .-^--r-^-. */