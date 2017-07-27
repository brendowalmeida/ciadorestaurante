using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace NOVOPJ.Models
{
    public class Prato
    {
        [Key]
        public int id_prato { get; set; }
        public string nome_prato { get; set; }

        public decimal preco_prato { get; set; }

        public int id_restaurante { get; set; }

        [ForeignKey("id_restaurante")]
        public Restaurante Restaurante { get; set; }
    }
}