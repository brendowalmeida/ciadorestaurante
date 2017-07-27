using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace NOVOPJ.Models
{
    public class Restaurante
    {
        [Key]
        public int id_restaurante { get; set; }
        public string nome_restaurante { get; set; }

        public virtual ICollection<Restaurante> ListaRestaurante { get; set; }
    }
}