data = {
    "projects": [
        {
            "name": "Nightscout",
            "github": "https://github.com/nightscout/cgm-remote-monitor",
            "website": "http://www.nightscout.info/",
            "configurations": [
                ["dexcom g5", "ios"],
                ["dexcom g4 share", "ios"],
                ["dexcom g4 share", "android"],
                ["dexcom g4", "android"],
                ["medtronic 530g", "android"],
                ["medtronic minimed connect", "ios"],
                ["medtronic 640g", "android"],
                ["freestyle libre", "android"]
            ]
        }, 
        {
            "name": "CGM in the Sky",
            "github": null,
            "pebble_store": "https://apps.getpebble.com/en_US/application/56539401713e32fa020000a6?section=watchfaces",
            "configurations": [
                ["nightscout", "pebble"]
            ]
        }, 
        {
            "name": "Simple CGM Spark",
            "github": null,
            "pebble_store": "https://apps.getpebble.com/en_US/application/56534d58d2d67de36d00005f?query=simple%2520cgm%2520spark&section=watchfaces",
            "configurations": [
                ["nightscout", "pebble"]
            ]
        }, 
        {
            "name": "Simple CGM",
            "github": null,
            "pebble_store": "https://apps.getpebble.com/en_US/application/557c3091d269ce13b300001a?query=simple%2520cgm&section=watchfaces",
            "configurations": [
                ["nightscout", "pebble"]
            ]
        },
        {
            "name": "Nightscout Duo",
            "github": null,
            "pebble_store": "https://apps.getpebble.com/en_US/application/5717e72e02a44b1cf900000e?query=duo&section=watchfaces",
            "configurations": [
                ["nightscout", "pebble"]
            ]
        }, 
        {
            "name": "Urchin",
            "github": "https://github.com/mddub/urchin-cgm",
            "pebble_store": null,
            "configurations": [
                ["nightscout", "pebble"]
            ] 
        },
        {
            "name": "Simple CGM Time",
            "github": null,
            "pebble_store": "https://apps.getpebble.com/en_US/application/5788797769ee715dd7000262",
            "configurations": [
                ["nightscout", "pebble"]
            ] 
        },
        {
            "name": "Simple CGM Analog",
            "pebble_store": "https://apps.getpebble.com/en_US/application/578c21b584accc314e0002bf",
            "github": null,
            "configurations": [
                ["nightscout", "pebble"]
            ] 
        },
        {
            "name": "Nightscout for Pebble",
            "pebble_store":"https://apps.getpebble.com/en_US/application/543bfbbcecc29baad0000007?section=watchfaces",
            "github": null,
            "configurations": [
                ["nightscout", "pebble classic"],
                ["nightscout", "pebble steel"],
                ["nightscout", "pebble time"],
                ["nightscout", "pebble time steel"]
            ]
        },
        {
            "name": "CGM in the Cloud",
            "pebble_store":"https://apps.getpebble.com/en_US/application/543bfff4ecc29b79790001de?query=CGM%2520in%2520the%2520Cloud&section=watchfaces",
            "github": null,
            "configurations": [
                ["nightscout", "pebble classic"],
                ["nightscout", "pebble steel"],
                ["nightscout", "pebble time"],
                ["nightscout", "pebble time steel"]
            ]
        }
    ]
}


Set.prototype.intersection = function(setB) {
    var intersection = new Set();
    for (var elem of setB) {
        if (this.has(elem)) {
            intersection.add(elem);
        }
    }
    return intersection;
}

let things_we_have = Immutable.Set(["pebble time", "nightscout"]);

for (let project of data.projects) {
  console.log(project);
  for (let dependencies of project.configurations) {
	  let dep = Immutable.Set(dependencies);
	  
	  let intersection = dep.intersect(things_we_have)
	  //intersection of have,dep = dep => everything
	  if (intersection.equals(dep)){
		  console.log("Everything")
	  }
	  //intersection of have,dep is empty => none
	  else if(intersection.isEmpty()) {
		  console.log("None")
	  }
	  //intersection of have,dep is subset of r => some
	  else if(intersection.isSubset(dep)){
		  console.log("Some")
	  }
  }
}
