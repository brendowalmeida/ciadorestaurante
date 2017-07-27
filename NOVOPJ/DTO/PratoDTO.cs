using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NOVOPJ.DTO
{
    public class PratoDTO
    {
        public int id_prato { get; set; }
        public string nome_prato { get; set; }
        public decimal preco_prato { get; set; }
        public int id_restaurante { get; set; }
        public string nome_restaurante { get; set; }
    }
}