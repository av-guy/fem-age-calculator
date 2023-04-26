# age-calculator

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


### Explanation

This is a challenge project from Front End Mentor. I did not strictly follow the
design requirements for the project, but nothing critical should be missing.
I included some additional accessibility features, such as aria-labels, and I tried
to follow most accessibility guidelines. I did not have the time to turn this into a
PWA, but I may revisit it in the future and add that support.

This project should work well with Edge, Firefox, and Chrome. I was able to use a
trial Browserstack environment, but the time limits meant that I could not do much
testing with Safari. If you happen to use Safari and are able to test this, please
consider filing a bug report if you encounter any behavior that breaks the project.

I did not write unit tests for this project because it is small. In a production
environment, I would have established the list of requirements and then written tests
for those requirements. As this is really just a small challenge project, I did not
figure it was worth the effort.

The minimum viewport size for this project is around 260px. Anything beyond that
and you're pretty much on your own. I figured this would be good enough for most of the
avaialble devices out there.

A couple of things I plan on taking care of in the future is a theme for people who
prefer higher contrast and also a general cleanup of the redundancy between the theme
properties from the light and dark theme respectively. There are also som performance
issues that have been highlighted by Lighthouse that I could definitely take care
of in the future.
