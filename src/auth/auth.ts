import { VueConstructor } from 'vue'
import { VueAuth, Auth0Options, RedirectCallback } from './VueAuth'

type Auth0PluginOptions = {
    onRedirectCallback: RedirectCallback,
    domain: string,
    clientId: string,
    audience?: string,
    [key: string]: string | RedirectCallback | undefined
}

/** Define a default action to perform after authentication */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DEFAULT_REDIRECT_CALLBACK = (appState: unknown) =>
    window.history.replaceState({}, document.title, window.location.pathname)

let instance: VueAuth

/** Returns the current instance of the SDK */
export const getInstance = (): VueAuth => instance

/** Creates an instance of the Auth0 SDK. If one has already been created, it returns that instance */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useAuth0 = ({
    onRedirectCallback = DEFAULT_REDIRECT_CALLBACK,
    redirectUri = window.location.origin + process.env.BASE_URL,
    ...options
}): VueAuth => {
    if (instance) return instance

    // The 'instance' is simply a Vue object
    instance = new VueAuth()
    console.log('auth.ts', redirectUri)
    instance.init(onRedirectCallback, redirectUri, options as Auth0Options)

    return instance
}

// Create a simple Vue plugin to expose the wrapper object throughout the application
export const Auth0Plugin = {
    install (Vue: VueConstructor, options: Auth0PluginOptions): void {
        Vue.prototype.$auth = useAuth0(options)
    }
}