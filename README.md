# events-app

This is an example app using `Vue` and `TypeScript`. The `events-app` is based on [this tutorial](https://auth0.com/blog/beginner-vuejs-tutorial-with-user-login/) by Holly Guevara from [auth0](auth0.com).

However this example incorporates several changes, the most profound one is the use of `TypeScript`. I try to outline the differences in this README.


## Changes

### TypeScript in Vue application

## Handling Auth0 authentication

The original tutorial by Holly Guevara uses `JavaScript` to implement the [auth0](auth0.com) authentication into the app. This setup differs quite a bit from the implementation in `TypeScript`, therefore [this tutorial](https://blog.risingstack.com/auth0-vue-typescript-quickstart-docs/#logintotheapp) by Tamas Kadlecsik from [RisingStack](risingstack.com) is being used. His tutorial is pretty straight forward and helps with the implementation of [auth0](auth0.com) using `TypeScript`, which is a little hard to find across the internet.

## Using Class-Style Vue Components

Read more about Class-Style Vue Components [here](https://vuejs.org/v2/guide/typescript.html#Class-Style-Vue-Components). Every Vue component in this projects uses this component style.

<table>
<thead>
<tr>
<th>JavaScript Vue Component</th>
<th>TypeScript Class-Style Vue Component</th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top">

```javascript
export default {
  name: 'Nav',
  methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    }
  }
}
```

</td valign="top">
<td>

```typescript
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Nav extends Vue {
  login (): void {
    this.$auth.loginWithRedirect({})
  }

  logout (): void {
    this.$auth.logout({
      returnTo: window.location.origin
    })
  }
}
```

</td>
</tr>
</tbody>
</table>

`src/components/partials/Nav.vue`


### Misc

* Semicolons in TypeScript files and `<script>` sections are omitted because of [this article](https://medium.com/@eugenkiss/dont-use-semicolons-in-typescript-474ccfe4bdb3)

<br>

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
