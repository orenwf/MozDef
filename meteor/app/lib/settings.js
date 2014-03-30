//configuration settings

elasticsearch={
address:"http://localhost:9200/",
healthurl:"_cluster/health",
docstatsurl:"_stats/docs"
}


mozdef={
    rootURL:"https://localhost",
    port:"443",
    ldapKibana:"http://localhost:9090/#/dashboard/elasticsearch/mozdef%20ldap%20dashboard",
    eventsKibana:"http://localhost:9090/index.html#/dashboard/elasticsearch/Logstash%20Style%20Search",
    alertsKibana:"http://localhost:9090/index.html#/dashboard/elasticsearch/Alerts",
    ldapLoginDataURL:"https://localhost:8444/ldapLogins/", // rest server
    alertDataURL:"https://localhost:8444/alerts/" // rest server
}
