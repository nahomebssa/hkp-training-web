import React from 'react'
import { useTheme } from "../ThemeContext"
import { section, div, h1, p } from '../html'
import { ThemeText } from "../ThemeText"

const classNames = (...arr) => arr.join(' ').trim()

export function Header({ as:As=section, className="", title, subtitle, centerStage, mini=true }) {
    const { dark } = useTheme()
    const themeBackground = dark ? 'bg-dark' : 'bg-light'
    const cn = `shadow-sm ${themeBackground} ${className}`.trim()

    const ccn = centerStage ? "d-flex flex-column align-items-center justify-content-center" : ""
    const mcn = mini && !centerStage ? "p-5" : "vh-100"

    const Wrapper = mini && !centerStage ? React.Fragment : div
    return (
        <As className={cn}>
            <div className={classNames("container", ccn, mcn)}>
                <Wrapper>
                    <ThemeText as={h1}>{title}</ThemeText>
                    <ThemeText as={p}>{subtitle}</ThemeText>
                </Wrapper>
            </div>
        </As>
    )
}