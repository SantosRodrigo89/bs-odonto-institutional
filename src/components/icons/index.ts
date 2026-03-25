export * from "./ImplantIcon"
export * from "./DtmIcon"
export * from "./EsteticaIcon"
export * from "./ExtracaoSisoIcon"
export * from "./CanalIcon"
export * from "./OrtodontiaIcon"
export * from "./BruxismoIcon"

import { createElement } from "react"
import type { ComponentType } from "react"
import { ImplantIcon } from "./ImplantIcon"
import { DtmIcon } from "./DtmIcon"
import { EsteticaIcon } from "./EsteticaIcon"
import { ExtracaoSisoIcon } from "./ExtracaoSisoIcon"
import { CanalIcon } from "./CanalIcon"
import { OrtodontiaIcon } from "./OrtodontiaIcon"
import { BruxismoIcon } from "./BruxismoIcon"

export type IconProps = {
  size?: number
  color?: string
}

const iconMap = {
  implant: ImplantIcon,
  dtm: DtmIcon,
  estetica: EsteticaIcon,
  extracao: ExtracaoSisoIcon,
  canal: CanalIcon,
  ortodontia: OrtodontiaIcon,
  bruxismo: BruxismoIcon,
} satisfies Record<string, ComponentType<IconProps>>

export type IconName = keyof typeof iconMap

export const Icon = ({ name, ...props }: { name: string } & IconProps) => {
  const Component = iconMap[name as IconName] as ComponentType<IconProps> | undefined
  return Component ? createElement(Component, props) : null
}

