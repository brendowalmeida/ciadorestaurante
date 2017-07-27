using NOVOPJ.Repository;
using NOVOPJ.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace NOVOPJ.Controllers
{
    [EnableCors("*", "*", "*")]
    public class RestauranteController : ApiController
    {
        private RestauranteRepository _RestauranteRepository;
        public RestauranteRepository RestauranteRepository
        {
            get
            {
                if (_RestauranteRepository == null)
                    _RestauranteRepository = new RestauranteRepository();
                return _RestauranteRepository;
            }
            set { _RestauranteRepository = value;  }
        }

        /*GET api/<controller> */
        public List<Restaurante> Get()
        {
            List<Restaurante> lista = new List<Restaurante>();
            lista = RestauranteRepository.GetAll();
            return lista;
           
        }

        // GET api/<controller>/5
        public Restaurante Get(int id, Restaurante entity)
        {
            entity = new Restaurante();
            entity = RestauranteRepository.GetOne(id);
            return entity;
        }

        public void Post([FromBody] Restaurante entity)
        {
            if (!string.IsNullOrEmpty(entity.nome_restaurante))
            {
                RestauranteRepository.Save(entity);
            }
        }

        // PUT api/<controller>/5
        public void Put([FromBody] Restaurante entity)
        {
            if (entity.id_restaurante > 0)
            {
                RestauranteRepository.Save(entity);
            }
        }

        // DELETE api/<controller>/5
        public void Delete(int id, Restaurante entity)
        {
            if(id > 0)
            {
               entity = RestauranteRepository.GetOne(id);
               RestauranteRepository.Delete(entity);
            }
        }
    }
}