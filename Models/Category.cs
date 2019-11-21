﻿using System.Collections.Generic;
using System.ComponentModel;

namespace CartAssignment.Models
{
    public class Category
    {
        public int Id { get; set; }
        [DisplayName("Category Name")]
        public string Name { get; set; }
        public virtual ICollection<Product> Products { get; set; }
    }
}