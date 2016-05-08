Categories = new Mongo.Collection("categories");

Categories.attachSchema(new SimpleSchema({
    name: {
        type: String
    },
    categories: {
        type: [String]
    }
}));

var categories = [
    { 
                name: "Account",
                        categories:["Any","None","URL Change","Company Name Change","Plan Change","Data Export","Data Import","Plans and Billing","Deletion","Trial Extension","Others","Login Related Issues","Blocked Manually"]
                            },
                                {
                                            name: "Tickets",
                                                    categories:["Any","None","Incidents","Task","List View","Details Page","Others","Search"]
                                                        },
                                                            {
                                                                        name: "Helpdesk",
                                                                                categories:[ "Any","None","Departments / Companies","Requests / Contacts","CAB","Service Catalog","Time Zone","Ticket Fields", "Field Templates", "Multiple Products", "Multi Language", "Groups", "Tags", "Agents", "Roles", "Day Pass", "Round Robin", "Search","Others", "Browser Issues", "Rebranding"]
                                                                                    },
                                                                                        {
                                                                                                    name: "Performance Issues",
                                                                                                            categories: ["Any","None","Latency Issues","Automations","Email Issues","Twilio","Chat","AWS Issues", "Export Delay", "App Down", "Scheduled Maintenance"]
                                                                                                                },
                                                                                                                    {
                                                                                                                                name: "Application Error",
                                                                                                                                        categories: ["Any","None","504 Errors","Portal Inaccessible","Something Went Wrong","IP Blocks","Agent Blocks"]
                                                                                                                                            },
                                                                                                                                                {
                                                                                                                                                            name: "Security",
                                                                                                                                                                    categories:["Any","None","SSO","SAML","Custom SSL","SSL","IP Whitelisting","Domain whitelisting","Backup","Others"]
                                                                                                                                                                        },
                                                                                                                                                                            {
                                                                                                                                                                                        name: "Dashboard",
                                                                                                                                                                                                categories:["Any","None","Announcement","LeaderBoard","Task","To Do","Others","Custom Dashboard","Recent Activities","Ticket Summary"]
                                                                                                                                                                                                    },
                                                                                                                                                                                                        {
                                                                                                                                                                                                                    name: "Phone",
                                                                                                                                                                                                                            categories:["Any","None","Request","Setup","Issues","Feature","Porting","Mobile App","Others"]
                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                    {
                                                                                                                                                                                                                                                name: "Chat",
                                                                                                                                                                                                                                                        categories:[]
                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                {
                                                                                                                                                                                                                                                                            name: "Social",
                                                                                                                                                                                                                                                                                    categories:["Any","None","Twitter","Facebook"]
                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                            {
                                                                                                                                                                                                                                                                                                        name: "Forums",
                                                                                                                                                                                                                                                                                                                categories:[]
                                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                                        {
                                                                                                                                                                                                                                                                                                                                    name: "Solutions",
                                                                                                                                                                                                                                                                                                                                            categories:[]
                                                                                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                                                                                    {
                                                                                                                                                                                                                                                                                                                                                                name: "Portal Customization",
                                                                                                                                                                                                                                                                                                                                                                        categories:["Any","None","CSS","CName","Others","Freshtheme"]
                                                                                                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                                                                                                                {
                                                                                                                                                                                                                                                                                                                                                                                            name: "Email",
                                                                                                                                                                                                                                                                                                                                                                                                    categories:["Any","None","Setup","Compose Email","Custom Mailbox","Attachments","Notification","Sendgrid","Delay","Incoming","Others","Emoji"]
                                                                                                                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                                                                                                                        ];


if(Meteor.isServer){
  // Seed data for categories  
  Meteor.startup(() => {
      if(Categories.find().count() === 0) {
          categories.forEach(function(category) {
              Categories.insert(category);
          });
      }
  });
}
