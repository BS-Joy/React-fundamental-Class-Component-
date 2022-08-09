import React from "react";

class Button extends React.Component {
    shouldComponentUpdate(nextprops) {
        const { change: currentProps, locale: currentLocale } = this.props;
        const { change: updateProps, locale: nextLocale } = nextprops;
        if (currentProps === updateProps && nextLocale === currentLocale) {
            return false;
        }
        else {
            return true;
        }
    }
    render() {
        const { change, locale, show } = this.props;
        return (
            <>
                <button type="button" onClick={() => change(locale)}>
                    {locale === 'bn-BD' ? 'Change To Bangla' : 'ইংরেজিতে পরিবর্তন করুন'}
                </button>
                {/* single line truthy or falsy value condition */}
                { show && <p>Hello</p>}
            </>
        )
    }
}

export default Button;