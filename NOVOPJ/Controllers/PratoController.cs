using NOVOPJ.DTO;
using NOVOPJ.Models;
using NOVOPJ.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.OData;

namespace NOVOPJ.Controllers
{
    [EnableCors("*", "*", "*")]
    public class PratoController : ApiController
    {
        private PratoRepository _PratoRepository;

        public PratoRepository PratoRepository
        {
            get
            {
                if (_PratoRepository == null)
                    _PratoRepository = new PratoRepository();
                return _PratoRepository;
            }
            set { _PratoRepository = value; }
        }

        public IQueryable<PratoDTO> Get()
        {
            IQueryable<PratoDTO> lista = PratoRepository.Get();
            return lista;
        }

        // GET api/<controller>/5
        public PratoDTO Get(int id, Prato entity)
        {
            return PratoRepository.GetOne(id);
        }

       
        //POST api/<controller>
        public void Post([FromBody] Prato entity)
        {
            if (!string.IsNullOrEmpty(entity.nome_prato))
            {
                PratoRepository.Save(entity);
            }
        }

        // PUT api/<controller>/5
        public void Put([FromBody] Prato entity)
        {
            if (entity.id_prato > 0)
            {
                PratoRepository.Save(entity);
            }
        }

        // DELETE api/<controller>/5
        public void Delete(int id, Prato entity)
        {
            if (id > 0)
            {
                entity = PratoRepository.GetOneByID(id);
                PratoRepository.Delete(entity);
            }
        }
    }
}