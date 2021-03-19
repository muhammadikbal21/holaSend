import React from 'react'
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'
import { Map } from '..'

const NewMap = () => {
    return (
        <div>
            <GoogleMap defaultZoom={10} defaultCenter={{lat: -6.3018378, lng: 106.819489820 }} />
        </div>
    )
}

export const WrappedMap = withScriptjs(withGoogleMap(Map))
