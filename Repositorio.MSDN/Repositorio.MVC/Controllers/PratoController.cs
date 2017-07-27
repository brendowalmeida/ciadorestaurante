using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using Repositorio.DAL.Contexto;
using Repositorio.Entidades;
using Repositorio.DAL.Repositorios;

namespace Repositorio.MVC.Controllers
{
    public class PratoController : Controller
    {
        private readonly PratoRepositorio pratoRep = new PratoRepositorio();

        // GET: Prato
        public ActionResult Index()
        {
            return View(pratoRep.GetAll().ToList());
        }

        // GET: Prato/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Prato prato = pratoRep.Find(id);
            if (prato == null)
            {
                return HttpNotFound();
            }
            return View(prato);
        }

        // GET: Prato/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Prato/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "PratoID,NomePrato,Descricao")] Prato prato)
        {
            if (ModelState.IsValid)
            {
                pratoRep.Adicionar(prato);
                pratoRep.SalvarTodos();

                return RedirectToAction("Index");
            }

            return View(prato);
        }

        // GET: Prato/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Prato prato = pratoRep.Find(id);
            if (prato == null)
            {
                return HttpNotFound();
            }
            return View(prato);
        }

        // POST: Prato/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "PratoID,NomePrato,Descricao")] Prato prato)
        {
            if (ModelState.IsValid)
            {
                pratoRep.Atualizar(prato);
                return RedirectToAction("Index");
            }
            return View(prato);
        }

        // GET: Prato/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Prato prato = pratoRep.Find(id);
            if (prato == null)
            {
                return HttpNotFound();
            }
            return View(prato);
        }

        // POST: Prato/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Prato prato = pratoRep.Find(id);

            pratoRep.Excluir(p => p == prato);

            pratoRep.SalvarTodos();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            pratoRep.Dispose();
            base.Dispose(disposing);
        }
    }
}
