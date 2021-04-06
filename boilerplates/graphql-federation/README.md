# GraphQL Federation Boilerplate

A federated GraphQL server creates a single endpoint from a collection of independent services. This is different than a montholic server that attempts to implement the features of all services in one project. One advantage of federation is that individual services can be scaled independent of other services. However it's not necessarily the best option in all cases, I recommend reading more about the pros and cons [here](https://cloudacademy.com/blog/microservices-architecture-challenge-advantage-drawback/).

## Notes

GraphQL Federation requires individual services to implement [this specification](https://www.apollographql.com/docs/federation/federation-spec/). Nexus does not currently support the specification and their progress can be tracked [here](https://github.com/graphql-nexus/nexus/issues/148).

To implement the specification we currently use [this plugin](https://github.com/Spantree/nexus-federation-plugin).
