using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repositorio.Entidades
{
    public class Restaurante
    {
        public int RestauranteID { get; set; }

        [Required]
        [MaxLength(30)]
        public string RestauranteNome { get; set; }

        [MaxLength(100)]
        public string Descricao { get; set; }
        
    }
}
