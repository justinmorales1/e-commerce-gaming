

export function xBoxClick(click) {
    
    return {
        type: 'XBOX_BUTTON_SELECTED',
        click

    }
}

export function playStationClick(click) {

    return {
        type: 'PLAYSTATION_BUTTON_SELECTED',
        click

    }
}

export function computerClick(click) {

    return {
        type: 'COMPUTER_BUTTON_SELECTED',
        click

    }
}

export function handHeldClick(click) {

    return {
        type: 'HANDHELD_BUTTON_SELECTED',
        click

    }
}

export function nintendoClick(click) {

    return {
        type: 'NINTENDO_BUTTON_SELECTED',
        click

    }
}
