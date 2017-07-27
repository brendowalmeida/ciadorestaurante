using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repositorio.Entidades
{
    public class Prato
    {
        public int PratoID { get; set; }

        [Required]
        [MaxLength(50)]
        public string NomePrato { get; set; }

        [MaxLength(100)]
        public string Descricao { get; set; }
    }
}
