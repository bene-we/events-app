import { Vue, Component } from 'vue-property-decorator'
import createAuth0Client, { PopupLoginOptions, Auth0Client, RedirectLoginOptions, GetIdTokenClaimsOptions, GetTokenSilentlyOptions, GetTokenWithPopupOptions, LogoutOptions } from '@auth0/auth0-spa-js'
import { User } from './User'
import { IdToken } from '@auth0/auth0-spa-js/dist/typings/global'

export type Auth0Options = {
    domain: string
    clientId: string
    audience?: string
    [key: string]: string | undefined
}

export type RedirectCallback = (appState: unknown) => void

@Component
export class VueAuth extends Vue {
    loading = true
    isAuthenticated?= false
    user?: User
    auth0Client?: Auth0Client
    popupOpen = false
    error?: Error

    async getUser (): Promise<undefined | User> {
        const u = await this.auth0Client?.getUser()
        if (u !== undefined) {
            return new User(u)
        }
    }

    /** Authenticates the user using a popup window */
    async loginWithPopup (o: PopupLoginOptions): Promise<void> {
        this.popupOpen = true

        try {
            await this.auth0Client?.loginWithPopup(o)
        } catch (e) {
            console.error(e)
            this.error = e
        } finally {
            this.popupOpen = false
        }

        this.user = await this.getUser()
        this.isAuthenticated = true
    }

    /** Authenticates the user using the redirect method */
    loginWithRedirect (o: RedirectLoginOptions): Promise<void> | undefined {
        return this.auth0Client?.loginWithRedirect(o)
    }

    /** Returns all the claims present in the ID token */
    getIdTokenClaims (o: GetIdTokenClaimsOptions): Promise<IdToken> | undefined {
        return this.auth0Client?.getIdTokenClaims(o)
    }

    /** Returns the access token. If the token is invalid or missing, a new one is retrieved */
    getTokenSilently (o: GetTokenSilentlyOptions): Promise<any> | undefined {
        return this.auth0Client?.getTokenSilently(o)
    }

    /** Gets the access token using a popup window */
    getTokenWithPopup (o: GetTokenWithPopupOptions): Promise<string> | undefined {
        return this.auth0Client?.getTokenWithPopup(o)
    }

    /** Logs the user out and removes their session on the authorization server */
    logout (o: LogoutOptions): void {
        return this.auth0Client?.logout(o)
    }

    /** Use this lifecycle method to instantiate the SDK client */
    async init (onRedirectCallback: RedirectCallback, redirectUri: string, auth0Options: Auth0Options): Promise<void> {
        // Create a new instance of the SDK client using members of the given options object
        this.auth0Client = await createAuth0Client({
            domain: auth0Options.domain,
            client_id: auth0Options.clientId,
            audience: auth0Options.audience,
            redirect_uri: redirectUri
        })

        try {
            // If the user is returning to the app after authentication..
            if (
                window.location.search.includes('error=') ||
                (window.location.search.includes('code=') && window.location.search.includes('state='))
            ) {
                // handle the redirect and retrieve tokens
                const { appState } = await this.auth0Client?.handleRedirectCallback() ?? { appState: undefined }

                // Notify subscribers that the redirect callback has happened, passing the appState
                // (useful for retrieving any pre-authentication state)
                onRedirectCallback(appState)
            }
        } catch (e) {
            console.error(e)
            this.error = e
        } finally {
            // Initialize our internal authentication state when the page is reloaded
            this.isAuthenticated = await this.auth0Client?.isAuthenticated()
            this.user = await this.getUser()
            this.loading = false
        }
    }
}