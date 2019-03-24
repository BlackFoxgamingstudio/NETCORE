namespace TodoApi.Models
{
    public class TodoItem
    {
        public long Id { get; set; }
        public string account {get; set; }

        public string current_activity { get; set; }

        public string current_task {get; set; }

        public string contact {get; set; }
        public string role {get; set; }
        
        public string usecase {get; set; }

        public string note {get; set; }

        public string action_plan {get; set; }

         public string Email_template {get; set; }

        public string user {get; set; }

        public string creationdate {get; set; }
        public string startdate { get; set; }
        public string enddate { get; set; }
        public bool IsComplete { get; set; }
    }
}