import React, { useEffect } from "react";

import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";
import "./i18n/config";
import { CMSAppProps } from "./CMSAppProps";
import { CMSMainView } from "./CMSMainView";
import { CMSAppProvider } from "./CMSAppProvider";
import CircularProgressCenter from "./components/CircularProgressCenter";
import { useTranslation } from "react-i18next";


/**
 * Main entry point for FireCMS. You can use this component as a full app,
 * by specifying collections and entity schemas.
 *
 * This component is in charge of initialising Firebase, with the given
 * configuration object.
 *
 * If you are building a larger app and need finer control, you can use
 * `CMSAppProvider` and `CMSMainView`.
 *
 * @param props
 * @constructor
 */
export function CMSApp(props: CMSAppProps) {

    const {
        firebaseConfig,
        onFirebaseInit,
        locale
    } = props;

    const [
        firebaseConfigInitialized,
        setFirebaseConfigInitialized
    ] = React.useState<boolean>(false);

    const { i18n } = useTranslation();
    const [usedFirebaseConfig, setUsedFirebaseConfig] = React.useState<Object>();
    const [configError, setConfigError] = React.useState<string>();
    const [firebaseConfigError, setFirebaseConfigError] = React.useState<boolean>(false);

    function initFirebase(config: Object) {
        if (firebase.apps.length === 0) {
            try {
                firebase.initializeApp(config);
                firebase.analytics();
                setUsedFirebaseConfig(config);
                setFirebaseConfigError(false);
                setFirebaseConfigInitialized(true);
                if (onFirebaseInit)
                    onFirebaseInit(config);
            } catch (e) {
                console.error(e);
                setFirebaseConfigError(true);
            }
        }
    }

    useEffect(() => {

        if (firebase.apps.length > 0)
            return;

        if (firebaseConfig) {
            console.log("Using specified config", firebaseConfig);
            initFirebase(firebaseConfig);
        } else if (process.env.NODE_ENV === "production") {
            fetch("/__/firebase/init.json")
                .then(async response => {
                    console.debug("Firebase init response", response.status);
                    if (response && response.status < 300) {
                        const config = await response.json();
                        console.log("Using configuration fetched from Firebase Hosting", config);
                        initFirebase(config);
                    }
                })
                .catch(e =>
                    setConfigError(
                        "Could not load Firebase configuration from Firebase hosting. " +
                        "If the app is not deployed in Firebase hosting, you need to specify the configuration manually" +
                        e.toString()
                    )
                );
        } else {
            setConfigError(
                "You need to deploy the app to Firebase hosting or specify a Firebase configuration object"
            );
        }
    }, []);

    useEffect(() => {
        i18n.changeLanguage(locale);
    }, [locale])

    if (configError) {
        return <div> {configError} </div>;
    }

    if (firebaseConfigError) {
        return <>
            <div>
                It seems like the provided Firebase config is not correct. If
                you
                are using the credentials provided automatically by Firebase
                Hosting, make sure you link your Firebase app to Firebase
                Hosting.
            </div>
            <div>
                {JSON.stringify(firebaseConfigError)}
            </div>
        </>;
    }

    if (!firebaseConfigInitialized || !usedFirebaseConfig) {
        return <CircularProgressCenter/>;
    }

    return (
        <CMSAppProvider {...props}
                        firebaseConfig={usedFirebaseConfig}>
            <CMSMainView {...props}/>
        </CMSAppProvider>
    );
}
